import React, { Component } from 'react';
 
import {
  Text,
  TouchableHighlight,
  FileSystem,
  View,
} from 'react-native';
 
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// const FileDownload = require('react-native-file-download');

export default class Example extends Component {
  async createPDF() {
    let options = {
      html: '<h1>PDF TEST</h1><img src="https://www.pexels.com/photo/cat-animal-pet-9673/" />',
      fileName: 'test',
    };
 
    let file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    alert(file.filePath);
//     let remoteUri=file.filePath;
    
//     const URL = remoteUri ;
// const DEST = RNFS.DocumentDirectoryPath
// const fileName = 'avc.pdf'
// const headers = {
//   'Accept-Language': 'en-US'
// }
 
// FileDownload.addListener(URL, (info) => {
//   console.log(`complete ${(info.totalBytesWritten / info.totalBytesExpectedToWrite * 100)}%`);
// });
 
// FileDownload.download(URL, DEST, fileName, headers)
// .then((response) => {
//   console.log(`downloaded! file saved to: ${response}`)
// })
// .catch((error) => {
//   console.log(error)
// })

  }
  
 
  render() {
    return(
      <View>
        <TouchableHighlight onPress={this.createPDF}>
          <Text>Create PDF</Text>
        </TouchableHighlight>
      </View>
    )
  }
}