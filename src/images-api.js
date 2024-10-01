import axios from "axios";

const globalParams = {
  client_id: "QeFAhaKvOCI4n6lEg6OwmjV__vMV7IiEF5KpUKjlUwc",
  per_page: 12,
  baseURL: "https:/api.unsplash.com",
};

axios.defaults.baseURL = globalParams.baseURL;

export const fetchImage = async (searchQuery, page) => {
  const response = await axios("/search/photos", {
    params: {
      client_id: globalParams.client_id,
      query: searchQuery,
      per_page: globalParams.per_page,
      page,
    },
  });

  return response.data;
};
