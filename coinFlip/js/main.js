function summonCoin(){
  //contains the value of input
 let userName = document.querySelector('.answer').value;
//will make an api request per value of the input
  fetch(`/api?student=${userName}`)
  .then(response => response.json())
  .then((data) =>{ 
    console.log(data)
    document.querySelector('#playerPick').textContent = `Player's choice: ${data.playerChoice}`
    document.querySelector('#cpuPick').textContent = `Bot's choice: ${data.cpuChoice}`
  
    document.querySelector('#winOrLose').textContent = `You just ${data.winOrLose}`

  })
}
document.querySelector('.flipMe').addEventListener('click', summonCoin)