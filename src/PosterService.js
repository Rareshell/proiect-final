import { useState } from "react";
import supabase from "./client";

const usePosterService = () => {
  const [posters, setPosters] = useState([]);

  const fetchPosters = async () => {
    try {
      const { data, error } = await supabase.from("posters").select("*");
      if (error) {
        throw error;
      }
      setPosters(data);
    } catch (error) {
      console.error("Error fetching posters:", error.message);
    }
  };

  const addPoster = async (posterData) => {
    try {
      const { data, error } = await supabase
        .from("posters")
        .insert([posterData]);
      if (error) {
        throw error;
      }
      if (data && data.length > 0) {
      } else {
        console.log("No data returned from Supabase query");
      }
    } catch (error) {
      console.error("Error adding poster:", error.message);
    }
  };

  const deletePoster = async (id) => {
    try {
      await supabase.from("posters").delete().eq("id", id);
      await fetchPosters(); // Refetch posters after deletion
    } catch (error) {
      console.error("Error deleting poster:", error.message);
    }
  };

  return { posters, addPoster, deletePoster, fetchPosters };
};

export default usePosterService;
