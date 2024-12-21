import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase_config/firebase";

export const Order = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};
export const Products = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
export const Customers = () => {
  return fetch("    https://dummyjson.com/users").then((res) => res.json());
};

export const BlogsData = () => {
  return fetch("https://jsonfakery.com/blogs").then((res) => res.json());
};

// export const fetchCustomers = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "customers"));
//     const customerData = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setCustomers(customerData);
//   } catch (error) {
//     console.error("Error fetching customers: ", error);
//   }
// };
export const fetchCustomers = async () => {
  return await getDocs(collection(db, "customers"));
};

// const labels = Utils.months({ count: 7 });
export const ChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wesnday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81, 56, 55, 40],

      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Sales",
      data: [80, 50, 80, 81, 76, 77, 40],

      borderColor: "red",
    },
  ],
};
