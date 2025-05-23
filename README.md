# dv01-Frontend-Challenge-202103

Hello! Welcome to my DV01 Front End Coding Challenge!

## How to Setup/Install :

- Ensure Node is installed
- to view the project on local : npm start
- npm install
- npm install --save-dev @testing-library/react@12.1.5 @testing-library/jest-dom@5.16.5
- npm install --save-dev @testing-library/jest-dom



### Important : 
- npm update
- npm audit fix --force

### Step 1. 
- Objective : Create a table (reference `./wireframe/Table.png`), where each column is the unique grade value in the data and the first row is the total aggregation of the current balance for each grade.
- My Process : I began setting up my react app making sure node was installed. I created a file for components and then created the the Table component. I started by extracting unique grades (not duplicated). data.map = gets all grade values. new set = removes duplicates, ... turns the Set back to an array. Aftweards I created a for loop to calculate the total balance, then created the table where the Balance and Grade will appear. I also added some minimal styling to ensure the table matches the wireframe goal.

### Step 2.
- Objective : Build four dropdowns for home ownership, quarter, term and year that will filter out the data and be reflected onto the table. Each dropdown will have unique values that you will need to generate from the data.
- My process : I added the table of data that will be used for the dropdown, this is a good starting point to visualize what is going to be included in the dropdown. The user is able to filter by homeownership, quarter, term and year using dropdowns. Dynamically builds the dropsdowns from the dataset. Shows only the rows that match the current filters. Includes a reset button = not functuional until next step.

### Step 3.
- Objective : Create a reset button that resets the data and filter.
- My Proccess : I added the reset button functionality so it will clear all searched filters. I also added the loading toggle functionality upon noticing there was styling for it in the app.css

### Step 4.
- Objective : Please develop as if you're shipping to production.
- My process : In this step,  I finished the testing phase and ensured that everything is appearing correctly. I have also made some edits as well as clean up for producation. 