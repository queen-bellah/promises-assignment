// Question 1

async function logMessageWithDelay(message, delaytime) {
 await new Promise(resolve => 
    setTimeout(resolve, delaytime));
 console.log(message);
}
logMessageWithDelay("Hello my name is Queen", 2000); 

// Question 2

const userIds = [1, 2, 3, 4, 5];

async function fetchAndLogUserDataSequentially(userIds) {
 for (const id of userIds) {
 try {
 const userData = await getUserData(id);
 console.log(userData);
 } catch (error) {
 console.error(`Error fetching data for user ID ${id}:`, error);
 }
 }
}

// Example usage:
fetchAndLogUserDataSequentially(userIds);

// Mock implementation of getUserData function
function getUserData(id) {
 return new Promise((resolve, reject) => {
 // Simulate fetching user data asynchronously (e.g., from an API)
 setTimeout(() => {
 const userData = { id: `User ${id}`, age: Math.floor(Math.random() * 50) + 20 };
 resolve(userData);
 }, Math.random() * 1000); // Simulate random delay up to 1 second
 });
}


// Question 3

async function performTask() {
    // Simulate a task that either succeeds or fails after a delay
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const isSuccess = Math.random() < 0.5; // Simulate success 50% of the time
    if (isSuccess) {
    resolve("Task completed successfully.");
    } else {
    reject("Error: Task encountered an error.");
    }
    }, 4000); // Simulate a delay of 1 second
    });
   }
   
   async function executeTask() {
    try {
    const result = await performTask();
    console.log("Success:", result);
    } catch (error) {
    console.error("Error:", error);
    }
   }
   executeTask();

//    Question4
   



function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    resolve(`${taskName} succeeded`);
    } else {
    reject(`${taskName} failed`);
    }
    });
   }
   
   async function executeWithRetry(taskName, retries, failureProbability) {
    for (let i = 0; i <= retries; i++) {
    try {
    const result = await unstableTask(taskName, failureProbability);
    console.log(result);
    return; // exit function if task succeeds
    } catch (error) {
    console.log(error);
    if (i === retries) {
    throw new Error(`Failed after ${retries} retries`);
    }
    }
    }
   }
   
   executeWithRetry("cook", 3, 0.5);
   