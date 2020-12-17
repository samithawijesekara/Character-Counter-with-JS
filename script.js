function count() {
    var characters = document.getElementById('userTxt').value.length;
    var words = document.getElementById('userTxt').value;
    var sentences = document.getElementById('userTxt').value;

    words = words.match(/\w+/g);
    words = words.length;

    sentences = sentences.match(/(\.|!|\?)+|(\.|!|\?)+$|(\.|!|\?)+/g);
    sentences = sentences.length;

    document.getElementById('characterCount').innerHTML = "CHARACTERS" + " " + characters;
    document.getElementById('wordCount').innerHTML = "WORDS" + " " + words;
    document.getElementById('sentenceCount').innerHTML = "SENTENCES" + " " + sentences;
    
}