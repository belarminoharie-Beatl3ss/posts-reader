import { Route, Routes } from "react-router";
import Layout from "@/components/layout";
import HomeScreen from "@/pages/HomeScreen";
import PostDetailsScreen from "@/pages/PostDetailsScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
        <Route path="posts/:postId" element={<PostDetailsScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
