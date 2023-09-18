/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function copyFile(baseFileURI, destPathName, fileSystem){
    window.resolveLocalFileSystemURL(baseFileURI, 
        function(file){        
            window.requestFileSystem(fileSystem, 0, 
                function (fileSystem) {
                    var documentsPath = fileSystem.root;
                    console.log(documentsPath);
                    file.copyTo(documentsPath, destPathName,
                    function(res){                        
                        console.log('copying was successful to: ' + res.nativeURL)
                    }, 
                    function(){
                        console.log('unsuccessful copying')
                    });
                });
        }, 
        function(){
            console.log('failure! file was not found')
        });
}

function copiar(que){
    if(que=='db'){
        copyFile("Z:/Piscina.db",         
        "\Phone\Android\data\io.tizedit.bolas\files\Piscina.db",
        LocalFileSystem.TEMPORARY); 
    }else{
        copyFile("Z:/fotossandbox/*.*",         
        "\Phone\Android\data\io.tizedit.bolas\files\images",
        LocalFileSystem.TEMPORARY);
    }
}

function copiar__(que){
    if(que=='db'){
        copyFile("F:/Nueva Sierra/Piscina.db",         
        "\Phone\Android\data\com.pinoutsolutions.controlacceso\files\databases\Piscina.db",
        LocalFileSystem.TEMPORARY); 
    }else{
        copyFile("F:/Nueva Sierra/Fotografias/*.*",         
        "\Phone\Android\data\com.pinoutsolutions.controlacceso\files\images",
        LocalFileSystem.TEMPORARY);
    }
}