

const Array = fetch("ApiData.json")
  .then(response => response.json())
  .then(data => {

   //serchinput
   

    // get the table and the search bar elements

const searchBar = document.getElementById('searchbox');


// add an event listener to the search bar that fires when the value changes
searchBar.addEventListener('input', (event) => {
  // get the search term
  const searchTerm = event.target.value.toLowerCase();

  // loop through all the rows in the table
  for (let i = 1; i < table.rows.length; i++) {
    // get the row and the cells
    const row = table.rows[i];
    const firstNameCell = row.cells[0];
    const lastNameCell = row.cells[1];
    const emailCell = row.cells[2];

    // check if the search term is present in any of the cells
    if (firstNameCell.textContent.toLowerCase().includes(searchTerm) || lastNameCell.textContent.toLowerCase().includes(searchTerm) || emailCell.textContent.toLowerCase().includes('@')) {
      // if it is, show the row
      row.style.display = '';
    } else {
      // if it isn't, hide the row
      row.style.display = 'none';
    }
  }
});


//filtering search button
// get the table and the search button elements

const searchBtn = document.getElementById('srchbtn');

// add an event listener to the search bar that fires when the value changes
searchBtn.addEventListener('input', (event) => {
  // get the search term
  const searchTerm = event.target.value.toLowerCase();

  // loop through all the rows in the table
  for (let i = 1; i < table.rows.length; i++) {
    // get the row and the cells
    const row = table.rows[i];
    
    const lastNameCell = row.cells[1];
    const emailCell = row.cells[2];

    // check if the search term is present in any of the cells
    if ( lastNameCell.textContent.toLowerCase().includes(searchTerm) || emailCell.textContent.toLowerCase().includes('@')) {
      // if it is, show the row
      row.style.display = '';
    } else {
      // if it isn't, hide the row
      row.style.display = 'none';
    }
  }
});





//sort by gender
    let table = document.getElementById('tbldata');
    let button = document.getElementById('sortGender');

button.addEventListener('click', sortTable);

function sortTable() {
  const rows = table.rows;
  const sortedRows = data.from(rows).sort(sortByGender);

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  for (const row of sortedRows) {
    table.appendChild(row);
  }
}



    

    for (let i = 0; i < data.length; i++) {
      let row = document.createElement('tr');
      

      let id = document.createElement('td');
      id.textContent = data[i].id;
      row.appendChild(id);

      let image = document.createElement('td');
        let img = document.createElement('img');
        img.src = data[i].img_src;
        image.appendChild(img);
        row.appendChild(image);

      let first_name = document.createElement('td');
      first_name.textContent = data[i].first_name;
      row.appendChild(first_name);

      let last_name = document.createElement('td');
      last_name.textContent = data[i].last_name;
      row.appendChild(last_name);

      let gender = document.createElement('td');
      gender.textContent = data[i].gender;
      row.appendChild(gender);

      let classf = document.createElement('td');
      classf.textContent = data[i].class;
      row.appendChild(classf);

      let marks = document.createElement('td');
      marks.textContent = data[i].marks;
      row.appendChild(marks);

      let passing = document.createElement('td'); 
      passing.textContent  = data[i].passing ? 'Passing' : 'Failed';
      row.appendChild(passing);

      let email = document.createElement('td');
      email.textContent = data[i].email;
      row.appendChild(email);
      

      table.appendChild(row);
    }
        //sort passing
    // get the table and the button elements

const passbutton = document.getElementById('sortPass');

// add an event listener to button
passbutton.addEventListener('click', () => {
  // loop through all the rows in the table
  for (let i = 1; i < table.rows.length; i++) {
    // get the row and the grade cell
    const row = table.rows[i];
    const gradeCell = row.cells[5];

    // check if the student's grade is passing
    if (gradeCell.textContent === 'Passing') {
      // if it is, show the row
      row.style.display = '';
    } else {
      // if it isn't, hide the row
      row.style.display = 'none';
    }
    
  }
});

//sort by marks


const marksbutton = document.getElementById('sortMarks');
marksbutton.addEventListener('click', () => {
 
  for (let i = 0; i < table.rows.length; i++) {
    // get the row and the cells
    const row = table.rows[i];
  if  (data.sort((a, b) => a.marks - b.marks)) {
    // if it is, show the row
    row.style.display = '';
  } else {
    // if it isn't, hide the row
    row.style.display = 'none';
  }
}
});
//sort by gender
const genderbutton = document.getElementById('sortGender');
genderbutton.addEventListener('click', () => {
  
  for (let i = 1; i < table.rows.length; i++) {
    // get the row and the cells
    const row = table.rows[i];
    
  if  (data.sort((a, b) => a.gender === 'female' ? -1 : 1)) {
    // if it is, show the row
    row.style.display = '';
  } else {
    // if it isn't, hide the row
    row.style.display = 'none';
  }
}
});

//sort by class

let classbtn = document.querySelector("sortClass");
classbtn.addEventListener("click", filterRows);

// filter the rows by classnumber
function filterRows() {
   // get all the rows in the table
   let rows = table.querySelectorAll("tr");
   // loop through each row
   rows.forEach(function(row) {
      // get the classnumber value
      let classnumber = row.querySelector(".class").textContent;
      // show or hide the row based on the classnumber value
      if (classnumber == "12345") {
         row.style.display = "";
      } else {
         row.style.display = "none";
      }
   });
}


    

  })
  .catch(error => {
    console.error(error);
  });

//sort by desc
const descBTN = document.getElementById('sortD');
function filterFirstname() {
  let rows = document.querySelectorAll("tbldata tr");
  
  let rowsArray = [];
  rows.forEach(function(row) {
     let firstname = row.querySelector(".first_name").textContent;
     Array.push(firstname);
     rowsArray.push(row);
  });
  Array.sort().reverse();
  for (let i = 0; i < Array.length; i++) {
     let firstname = Array[i];
     let row = rowsArray.find(function(row) {
        return row.querySelector(".first_name").textContent == firstname;
     });
     table.insertBefore(row, table.firstChild);
  }
}

descBTN.addEventListener("click", filterFirstname);


  


 
    


  
  
  
    
      
  
  

  