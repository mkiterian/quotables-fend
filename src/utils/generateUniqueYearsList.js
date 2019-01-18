
const generateUniqueYearsList = (quotes) => {
  const years = [];
  for(let quote of quotes){
    if(!years.includes(quote.year)){
      years.push(quote.year);
    }
  }
  return years;
}

export default generateUniqueYearsList;

