import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { ServicesProvider, createServices } from "./contexts/serviceDependency.tsx";

const services = createServices();
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ServicesProvider services={services}>
			<QueryClientProvider client={queryClient}>
				<App />
				{/* <ReactQueryDevtools /> */}
			</QueryClientProvider>
		</ServicesProvider>
	</StrictMode>,
);
