import { QueryFunction, useQuery } from "@tanstack/react-query";

// export function useFetchList<T?>(queryKey: string[], queryFn: QueryFunction) {
// 	return useQuery<Event[], Error>({
// 		queryKey: ["events"],
// 		queryFn: async () => {
// 			return await eventService.getEvents();
// 		},
// 		// initialData: initialEventsData,
// 		staleTime: 60 * 60 * 24,
// 	});
// }
