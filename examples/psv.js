
    let FastText = require('fasttext.js');
    let path = require("path")

    var ft = new FastText({
        loadModel: path.resolve("./model/cc.uk.10.bin"),//.replace(/\\/g,"/"),
        printSentenceVectors:{
            normalize: true
        }
    });

    let text = `несе Галя воду
    коромисло гнеться`

    ft.loadPSV()
        .then(done => {
                ft.printSentenceVectors(text)
                .then(resp => {
                    console.log(resp)
                })
                // ft.unload()
        })

        .catch (e => {
            console.error(e.toString())
            // ft.unload()
        })    