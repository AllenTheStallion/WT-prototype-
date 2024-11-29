// Initialize tracking variables
let waterIntake = 0;
let exerciseTime = 0;
let streakCount = 0;

// Water intake tracker
document.getElementById('waterBtn').addEventListener('click', function() {
  waterIntake++;
  updateWaterProgress();
  checkStreak();
});

// Exercise tracker
document.getElementById('exerciseBtn').addEventListener('click', function() {
  exerciseTime += 10; // Add 10 minutes per click
  updateExerciseProgress();
  checkStreak();
});

// Update water progress
function updateWaterProgress() {
  document.getElementById('waterProgress').innerText = `Progress: ${waterIntake} cups`;
  if (waterIntake >= 8) {
    document.getElementById('waterGoal').innerText = "Goal Completed!";
  }
}

// Update exercise progress
function updateExerciseProgress() {
  document.getElementById('exerciseProgress').innerText = `Progress: ${exerciseTime} minutes`;
  if (exerciseTime >= 30) {
    document.getElementById('exerciseGoal').innerText = "Goal Completed!";
  }
}

// Update streak message
function checkStreak() {
  if (waterIntake >= 8 && exerciseTime >= 30) {
    streakCount++;
    document.getElementById('streakMessage').innerText = `You are on a ${streakCount}-day streak! Keep it up!`;
  }
}
