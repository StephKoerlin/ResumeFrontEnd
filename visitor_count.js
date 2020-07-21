fetch('https://sjigethl2f.execute-api.us-east-1.amazonaws.com/Prod/Visitors')

  .then(response => response.json())
  .then(data => {
        var myObj = JSON.parse(JSON.stringify(data));
        document.getElementById('count').innerHTML = myObj.Attributes.Visitors;
        console.log('This page has been viewed '+ myObj.Attributes.Visitors + ' times!');
  });
