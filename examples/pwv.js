
    let FastText = require('fasttext.js');
    let path = require("path")

    var ft = new FastText({
        loadModel: path.resolve("./model/cc.uk.10.bin"),
        printWordVectors:{
            normalize: true
        }
    });

    let text = "несе галя воду"

    ft.loadPWV()
        .then(done => {
                ft.printWordVectors(text)
                .then(resp => {
                    console.log(resp)
                })
                // ft.unload()
        })

        .catch (e => {
            console.error(e.toString())
            // ft.unload()
        })    