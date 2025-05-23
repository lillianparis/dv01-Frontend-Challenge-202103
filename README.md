# dv01-Frontend-Challenge-202103

Hello World! Welcome to my DV01 Front End Coding Challenge!

## How to Begin/Setup :

Ensure Node is installed
Run - npm install
to view the project on local - npm start
to download testing : npm install --save-dev @testing-library/react@12.1.5 @testing-library/jest-dom@5.16.5


### Important : 
npm update
npm audit fix --force

### Step 1. 
Objective : Create a table (reference `./wireframe/Table.png`), where each column is the unique grade value in the data and the first row is the total aggregation of the current balance for each grade.
My Process : I began setting up my react app making sure node was installed. I created a file for components and then created the the Table component. I started by extracting unique grades (not duplicated). data.map = gets all grade values. new set = removes duplicates, ... turns the Set back to an array. Aftweards I created a for loop to calculate the total balance, then created the table where the Balance and Grade will appear. I also added some minimal styling to ensure the table matches the wireframe goal.

### Step 2.
Objective : Build four dropdowns for home ownership, quarter, term and year that will filter out the data and be reflected onto the table. Each dropdown will have unique values that you will need to generate from the data.
My process : I added the table of data that will be used for the dropdown, this is a good starting point to visualize what is going to be included in the dropdown. The user is able to filter by homeownership, quarter, term and year using dropdowns. Dynamically builds the dropsdowns from the dataset. Shows only the rows that match the current filters. Includes a reset button = not functuional until next step.