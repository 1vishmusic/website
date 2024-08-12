<script setup lang="ts">
import type {EventResponse} from "@/api/EventController";

defineProps<{
				event: EventResponse
}>()
</script>

<template>
				<tr>
								<td><a :href="event.webpage ?? undefined" target="_blank" class="button concert-button" rel="noopener noreferrer">{{event.name}}</a></td>
								<td>{{ event.date }}, <a :href="event.place_webpage ?? undefined" target="_blank" rel="noopener noreferrer">{{ event.place }}</a></td>
				</tr>
</template>

<style scoped>

</style>
