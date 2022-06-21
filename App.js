import React from 'react';
import { SafeAreaView, FlatList, Image, Button } from 'react-native';
import { useDogs } from './useDogs.js';
import fs from 'react-native-fs';

const BHOOS_DOCS_LINK = fs.DocumentDirectoryPath;

export default function App() {
  // const dogs = useDogs();
  const dogs = Array.from({ length: 10 }).map((_, idx) => {
    return `${BHOOS_DOCS_LINK}/dog-${idx}.png`;
  });

  function download() {
    console.log('press the download button');
  }

  // useEffect(() => {
  //   function downloadDogs() {
  //     dogs.forEach(async (dog, idx) => {
  //       try {
  //         const filePath = `${BHOOS_DOCS_LINK}/dog-${idx}.png`;
  //         console.log(filePath);

  //         const { promise } = fs.downloadFile({
  //           fromUrl: dog,
  //           toFile: filePath,
  //           progress: p => {
  //             console.log('this is the progress', p);
  //           },
  //         });

  //         const { bytesWritten, jobId, statusCode } = await promise;
  //       } catch (err) {
  //         console.log('this is the err', err);
  //       }
  //     });
  //   }

  //   if (dogs.length > 0) downloadDogs();
  // }, [dogs]);

  return (
    <SafeAreaView style={{ marginTop: 60 }}>
      <Button title="Download" onPress={download} />
      <FlatList data={dogs} renderItem={Dog} keyExtractor={item => item} />
    </SafeAreaView>
  );
}

function Dog({ item }) {
  return <Image source={{ url: item }} style={{ height: 240, width: 240 }} />;
}
