import React, { useEffect, useState } from "react";
import axios from "axios";
import { VHS } from "../types";
import VhsThumbnail from "../components/VHSThumbnail";
import SearchBar from "../components/SearchBar";
// @ts-ignore
import placeholder from "../assets/placeholder.jpg";

type Props = {};

export default function Explore({}: Props) {
  const [vhsList, setVhsList] = useState<VHS[]>([]);
  const [filteredList, setFilteredList] = useState<VHS[]>([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    getVhsList();
  }, []);

  const getVhsList = async () => {
    try {
      const response = await axios.get("/api/vhs");
      setVhsList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <SearchBar
        searchBase={vhsList}
        setFilteredList={setFilteredList}
        setSearching={setSearching}
      />

      {/* TODO: only use filteredlist for display */}
      {searching
        ? filteredList.map(
            (item) =>
              item.id && (
                <VhsThumbnail
                  key={item.id}
                  image={
                    item.thumbnail
                      ? item.thumbnail.replace(/\\/g, "/")
                      : placeholder
                  }
                  vhsId={item.id}
                  vhsTitle={item.title}
                  clickable
                />
              )
          )
        : vhsList.map(
            (item) =>
              item.id && (
                <VhsThumbnail
                  key={item.id}
                  image={
                    item.thumbnail
                      ? item.thumbnail.replace(/\\/g, "/")
                      : placeholder
                  }
                  vhsId={item.id}
                  vhsTitle={item.title}
                  clickable
                />
              )
          )}
    </div>
  );
}
