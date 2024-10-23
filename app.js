function calculateLifetimeSupply(){

    var FavSnack = document.getElementById('Snack').value;
    var CurrentAge = document.getElementById('Age').value;
    var MaxAge = document.getElementById('MaxAge').value;
    var AmountPerDay = document.getElementById('AmPerDay').value;

    var result = (MaxAge - CurrentAge) * 365 * AmountPerDay; 
    document.getElementById('result').innerHTML = `You will need ${result} ${FavSnack} to last you until the ripe old age of ${MaxAge}.`;
}