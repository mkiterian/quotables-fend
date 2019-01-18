
const generateUniqueYearsList = (quotes) => {
  const years = [];
  for(let quote of quotes){
    console.log(quote);
    if(!years.includes(quote.year)){
      years.push(quote.year);
    }
  }
  return years;
}

export default generateUniqueYearsList;

