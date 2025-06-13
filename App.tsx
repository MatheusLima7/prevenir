import "react-native-gesture-handler";

import Router from "./router";
import StoreProvider from "@src/store/StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
