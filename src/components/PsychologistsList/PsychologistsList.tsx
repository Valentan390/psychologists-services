// import React from 'react'
import { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  onValue,
  query,
  // startAt,
  // endAt,
  // limitToLast,
  // equalTo,
  limitToFirst,
} from "firebase/database";
import PsychologistlistItem from "../PsychologistlistItem/PsychologistlistItem";
import { StyledPsychologistsList } from "./PsychologistsList.styled";

interface Psychologist {
  id: string;
  name: string;
  specialization: string;
  avatar_url: string;
  price_per_hour: number;
  rating: number;
  experience: string;
  license: string;
  initial_consultation: string;
  about: string;
}

const PsychologistsList = () => {
  const [psychologists, setPsychologists] = useState<Psychologist[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const psychologistsPerPage = 3;
  console.log(psychologists);

  useEffect(() => {
    const db = getDatabase();
    const postsRef = ref(db, "Psyhologists");

    const startIndex = currentPage * psychologistsPerPage;
    // const endIndex = startIndex + psychologistsPerPage;

    const queryRef = query(
      postsRef,

      limitToFirst(startIndex + psychologistsPerPage)
    );

    onValue(queryRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);

      const psychologistsData = data ? Object.values(data) : [];
      setPsychologists(psychologistsData as Psychologist[]);
    });
  }, [currentPage, psychologistsPerPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  return (
    <StyledPsychologistsList>
      {psychologists?.map((psychologist, index) => (
        <PsychologistlistItem
          key={index}
          avatar_url={psychologist.avatar_url}
          name={psychologist.name}
          rating={psychologist.rating}
          experience={psychologist.experience}
          license={psychologist.license}
          initial_consultation={psychologist.initial_consultation}
          specialization={psychologist.specialization}
          price_per_hour={psychologist.price_per_hour}
          about={psychologist.about}
        />
      ))}
      <button onClick={handlePrevPage} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={handleNextPage}>Next</button>
    </StyledPsychologistsList>
  );
};

export default PsychologistsList;
