// Utility Logic

function noInputtedWord(text, word) {

  if(word) {
    return text.trim().length === 0 || word.trim().length === 0
  } else 
  return text.trim().length === 0
}



// Business Logic

function wordCounter(text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function omitOffensive(text) {
  const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const wordArray = text.trim().toLowerCase().split(" ");
  return wordArray.filter(word => {
    return !badWords.includes(word);
  })
}

function removePunctuation(text) {

}

function removeNumbers(text) {

}

function mostUsedWords(text) {
  // eventually refactor to noInputtedWord()
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.trim().toLowerCase().split(" ");
  const uniqueWordArray = [];
  wordArray.forEach(function (word) {
    if (!uniqueWordArray.includes(word)) {
      uniqueWordArray.push(word);
    }
  });
  uniqueWordArray.sort((a,b) => {
    return numberOfOccurrencesInText(b, text) - numberOfOccurrencesInText(a, text);
  });
  //what edge cases do we have to look at? - does numberOfOccurrencesInText handle it for me?
  return uniqueWordArray.slice(0,3);
}

// UI Logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== textArray.length - 1) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const mostUsed = mostUsedWords(passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    mostUsed.forEach(function(word, index) {
      $("#common-word-" + index + "").html(word);
      $("#common-count-" + index + "").html(numberOfOccurrencesInText(word, passage));
    });
  });
});
