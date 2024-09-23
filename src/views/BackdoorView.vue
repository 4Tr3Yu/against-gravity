<script setup lang="ts">
let edit = false;
let dummyList = [
	{ id: 1, name: 'Program 1', description: 'This is a description of program 1' },
	{ id: 2, name: 'Program 2', description: 'This is a description of program 2' }
];
let newProgram: Program = {
	name: '',
	description: '',
	weeks: []
};

const toggleEdit = () => {
	edit = !edit;
	newProgram = {
		name: '',
		description: '',
		weeks: []
	}
}
function addWeek() {
	if (!newProgram.weeks) {
		newProgram.weeks = [];
	}
	newProgram.weeks = [...newProgram.weeks, { name: '', days: [] }];
	console.log('from add week', newProgram);
}

function addDay(weekIndex: number) {
	if (!newProgram.weeks) {
		newProgram.weeks = [];
	}
	newProgram.weeks[weekIndex].days = [...newProgram.weeks[weekIndex].days, { name: '', workouts: [] }];
	console.log('from days', newProgram);
}
function addWorkout(weekIndex: number, dayIndex: number) {
	if (!newProgram.weeks) {
		newProgram.weeks = [];
	}
	newProgram.weeks[weekIndex].days[dayIndex].workouts = [...newProgram.weeks[weekIndex].days[dayIndex].workouts, { name: '', details: '' }];
	console.log('from workout', newProgram);
}
</script>
<template>
	<h2 class="h2">Backdoor</h2>
	<h3 class="h3">Programs List</h3>
	<hr class="w-full my-4" />
	<div class="w-full text-token grid grid-cols-1 md:grid-cols-3 gap-4">
		<div v-if="dummyList.length === 0" class="card bg-secondary-50 p-4 flex justify-center items-center">
			<p>No programs found</p>
		</div>
		<template v-else-if="dummyList.length > 0 && !edit">
			<div v-for="program in dummyList" :key="program.id" class="card">
				<header class="card-header">
					<h4 class="h4">{program.name}</h4>
				</header>
				<section class="p-4">
					<p>{program.description}</p>
				</section>
				<footer class="card-footer">
					<button type="button" class="btn variant-ghost">
						<span>✏️</span>
						<span>Edit</span>
					</button>
					<button type="button" class="btn variant-ghost">
						<span>💀</span>
						<span>Delete</span>
					</button>
				</footer>
			</div>
		</template>
		<div v-else class="card bg-initial p-4 col-span-3">
			<header class="card-header">
				<h4 class="h4">Create program</h4>
			</header>
			<section class="p-4">
				<label class="label mb-4 flex">
					<span class="w-50">Program Name</span>
					<input class="input" type="text" bind:value={newProgram.name} placeholder="Name" />
				</label>
				<label class="label mb-4 flex">
					<span>Description</span>
					<input class="input" type="text" bind:value={newProgram.description}
						placeholder="Short description" />
				</label>

				<hr class="w-full my-4" />
				<template v-if="newProgram.weeks">
					<div v-for="(week, index) in newProgram.weeks" :key="" class="card bg-ghost mb-2">
						<header class="card-header">
							<h5 class="h5">Week {weekIndex+1}</h5>
						</header>
						<section class="p-4">
							<h5 class="h5">Days</h5>
							<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div v-for="(day, dayIndex) in week.days" class="card color-surface-500 p-4">
									<label class="label mb-4">
										<strong>Day Name</strong>
										<input class="input" type="text" bind:value={day.name} placeholder="Day Name" />
									</label>
									<hr class="w-full mt-2">
									<hr class="w-full my-2">


									<template v-for="(workout, index) in day.workout">
										<label class="label mb-4">
											<span>Workout Name</span>
											<input class="input" type="text" bind:value={workout.name}
												placeholder="Workout Name" />
										</label>
										<label class="label mb-4">
											<span>Workout Description</span>
											<textarea class="input" bind:value={workout.details} placeholder="EMOM 5" />
										</label>
										<hr class="w-full my-2">
									</template>
									<button v-if="day.workout.length < 5" type="button" class="btn variant-ghost w-full"
										on:click={()=>
										addWorkout(weekIndex, dayIndex)}>
										<span>Add Workout ➕</span>
									</button>
								</div>
								<div v-if="week.days < 7"
									class="card bg-secondary p-4 flex justify-center items-center">
									<button type="button" class="btn variant-ghost w-full" on:click={()=>
										addDay(weekIndex)}>
										<span>Add Day ➕</span>
									</button>
								</div>
							</div>
						</section>
						<footer class="card-footer">
							<button type="button" class="btn variant-ghost btn-danger">
								<span>💀</span>
								<span>Delete</span>
							</button>

						</footer>
					</div>
				</template>
				<button type="button" class="btn variant-ghost w-full mt-4" on:click={addWeek}>
					<span>Add Week ➕</span>
				</button>
				<hr class="w-full mt-4" />
			</section>
			<footer class="card-footer flex flex-row-reverse gap-x-2 border-t-1 border-sky-300">
				<button type="button" class="btn variant-ghost bg-danger" on:click={toggleEdit}>
					<span>Cancel</span>
				</button>
				<button type="button" class="btn variant-ghost bg-success">
					<span>Save</span>
				</button>
			</footer>
		</div>

		<div v-if="!edit" class="card bg-initial p-4 flex justify-center items-center">
			<button type="button" class="btn-icon variant-ghost btn-xl" on:click={toggleEdit}>
				<span>➕</span>
			</button>
		</div>
	</div>
</template>