var questions = ['Nordhoff Hall?', 'Jacaranda Hall?', 'Sierra Hall?', 'Matador Bookstore?', 'Oviatt Library?', 
                 'Bayramian Hall?', 'Sequoia Hall?', 'Jerome Richfield Hall?', 'Valley Performing Arts Center?', 
                 'Manzanita Hall?', 'College Of Education?','Bookstein Hall David Nazarian College of Business and Economics?',
                 'Eucalyptus Hall?','Live Oak Hall?','Citrus Hall?'],
     index = 0, prevIndex = 0;

var start = document.getElementById('start');

bootstrap_alert = function (message,type) {
    $('#alert_placeholder').append('<div class="alert '+type+'" role="alert">' + message + '</div>')
    index++;
    
 }
bootstrap_alert.warning = function (message,id) {
    if (id == prevIndex) {
        $('#alert_placeholder').append('<div class="alert alert-success" role="alert">Correct!</div>')
        answers[id] = 1;
        console.log(answers)
        
    } else {
        $('#alert_placeholder').append('<div class="alert alert-danger" role="alert">Sorry that is incorrect!</div>') 
        answers[id] = 2;  
        console.log(answers)
             
    }
    $('#alert_placeholder').append('<div class="alert alert-primary" role="alert">'+ message +'</div>')
    prevIndex = index;
    index++;
    console.log(index);    
}


$('#clickme').on('click', function () {
    bootstrap_alert.warning(questions[0]);
    index++;
    console.log(index);
});

$('#start').on('click', function () {
    bootstrap_alert('Welcome to the CSUN Google Maps Game! When prompted click on the area where you think the hall is located. Good Luck!','alert-light');
    bootstrap_alert(questions[0],'alert-primary');
    // start.style.visibility ='hidden'

});

function changeBorder(id) {
    if (id == prevIndex) {
        return 'green'
    } else {
        return '#FF0000'
    }
    // alert('This is Nordhoff hall');
}
function changeFill(id) {
    if (id == prevIndex) {
        return '#00ff00'
    } else {
        return '#FF0000'
    }
}
