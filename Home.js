import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, Button, View, Text } from 'react-native';
import fs from 'react-native-fs';
import { useTheme } from './theme';

const BHOOS_DOCS_LINK = fs.DocumentDirectoryPath;
const largeImageUrl = `https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1600`;
const filePath = `${BHOOS_DOCS_LINK}/large.png`;

export function Home() {
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  const [downloaded, setDownloaded] = useState(false);

  async function downloadLargeFile() {
    fs.downloadFile({
      fromUrl: largeImageUrl,
      toFile: filePath,
      /**
       * without this progress callback is not triggered
       * @see https://github.com/itinance/react-native-fs/pull/1086
       */
      begin: () => {},
      progressInterval: 0,
      progress: progress => {
        const { bytesWritten, contentLength } = progress;
        const percent = Math.floor((bytesWritten / contentLength) * 100);
        setProgress(percent);
      },
    }).promise.then(_ => {
      setDownloaded(true);
    });
  }

  async function dirDelete() {
    const exists = await fs.exists(filePath);
    if (exists) {
      await fs.unlink(filePath);
    }
  }

  async function cancelDownload() {}

  async function deleteFile() {
    await dirDelete();
    setDownloaded(false);
  }

  useEffect(() => {
    dirDelete();
  }, []);

  return (
    <SafeAreaView style={{ marginTop: 120 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button title="Download" onPress={downloadLargeFile} />
        <Button title="Delete" onPress={deleteFile} />
        <Button title="Cancel" onPress={cancelDownload} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 20 }}>Downloaded: {progress}</Text>
        <Image source={{ uri: theme.bg }} style={{ width: 360, height: 360 }} />
      </View>
    </SafeAreaView>
  );
}
