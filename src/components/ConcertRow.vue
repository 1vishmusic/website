<script setup lang="ts">
import type {EventResponse} from "@/api/EventController";

const props = defineProps<{
				event: EventResponse
}>()
</script>

<template>
				<tr>
								<td><a class="button concert-button">{{event.name}}</a></td>
								<td>{{ event.date }}, <a :href="event.place_webpage ?? undefined">{{ event.place }}</a></td>
				</tr>
</template>

<style scoped>

</style>
