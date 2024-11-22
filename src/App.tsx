function App() {
  // Promise
  // mashq-1
  // const urls = [
  //   "https://jsonplaceholder.typicode.com/posts/1",
  //   "https://jsonplaceholder.typicode.com/posts/2",
  //   "https://jsonplaceholder.typicode.com/posts/3",
  // ];
  // function fetchSequentially(urls: string[]): void {
  //   let promise = Promise.resolve();
  //   urls.forEach((url) => {
  //     promise = promise
  //       .then(() => {
  //         console.log(`Fetching from URL: ${url}`);
  //         return fetch(url);
  //       })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("Result:", data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error.message);
  //       });
  //   });
  // }
  // fetchSequentially(urls);
  //mashq-2
  // const url1 = "https://jsonplaceholder.typicode.com/users";
  // const url2 = "https://jsonplaceholder.typicode.com/posts";
  // async function fetchData(): Promise<void> {
  //   try {
  //     const [users, posts] = await Promise.all([
  //       fetch(url1).then((response) => response.json()),
  //       fetch(url2).then((response) => response.json()),
  //     ]);
  //     console.log(" Olingan ma'lumotlar:", [users, posts]);
  //   } catch (error) {
  //     console.error("Xatolik yuz berdi:", error);
  //   }
  // }
  // fetchData();
  //mashq-3
  // const url1 = "https://jsonplaceholder.typicode.com/photos";
  // const url2 = "https://jsonplaceholder.typicode.com/todos";
  // const url3 = "https://jsonplaceholder.typicode.com/comments";
  // async function fetchFastestData(): Promise<void> {
  //   try {
  //     const fastestResult = await Promise.race([
  //       fetch(url1).then((response) => response.json()),
  //       fetch(url2).then((response) => response.json()),
  //       fetch(url3).then((response) => response.json()),
  //     ]);
  //     console.log("Birinchi:", fastestResult);
  //   } catch (error) {
  //     console.error("Xatolik yuz berdi:", error);
  //   }
  // }
  // fetchFastestData();
  // Async/await
  //mashq-1
  // const urls = [
  //   "https://jsonplaceholder.typicode.com/posts/1",
  //   "https://jsonplaceholder.typicode.com/posts/2",
  //   "https://jsonplaceholder.typicode.com/posts/3",
  // ];
  // async function fetchSequentially(): Promise<void> {
  //   for (const url of urls) {
  //     try {
  //       console.log(`Urlga sorov: ${url}`);
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log("Natijas:", data);
  //     } catch (error) {
  //       console.warn(`Xatolik yuz berdi ${url}`, error);
  //     }
  //   }
  // }
  // fetchSequentially();
  // mashq-2
  //   const url1 = "https://jsonplaceholder.typicode.com/users";
  // const url2 = "https://jsonplaceholder.typicode.com/posts";
  // async function fetchParallel(): Promise<void> {
  //   try {
  //     const [users, posts] = await Promise.all([
  //       fetch(url1).then((res) => res.json()),
  //       fetch(url2).then((res) => res.json()),
  //     ]);
  //     console.log("Ma'lumotlar olindi:");
  //     console.log([
  //       users,
  //       posts,
  //     ]);
  //   } catch (error) {
  //     console.error("Xatolik yuz berdi, ma’lumotni yuklab bo‘lmadi.");
  //   }
  // }
  // fetchParallel();
  //mashq-3
  // const url1 = "https://jsonplaceholder.typicode.com/photos";
  // const url2 = "https://jsonplaceholder.typicode.com/todos";
  // const url3 = "https://jsonplaceholder.typicode.com/comments";
  // async function fetchFirstSuccessful(): Promise<void> {
  //   const urls = [url1, url2, url3];
  //   for (const url of urls) {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) throw new Error("Server xatosi");
  //       const data = await response.json();
  //       console.log("birinchi muvafiqiyatli sorov natijasi:", data);
  //       return;
  //     } catch (error) {
  //       console.warn(`Xatolik yuz berdi: ${url}`, error);
  //     }
  //   }
  //   console.error("Barcha so‘rovlar xato bilan tugadi.");
  // }
  // fetchFirstSuccessful();
}
export default App;
