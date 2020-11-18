import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from '../../data.json';
import {
  Article,
  ImageContainer,
  Image,
  QuoteIcon,
  Author,
  Job,
  Info,
  ButtonContainer,
  ReviewButton,
  RandomButton,
} from './styles/ReviewStyle';

const Review: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number: Number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Article>
      <ImageContainer>
        <Image src={image} alt={name} />
        <QuoteIcon>
          <FaQuoteRight />
        </QuoteIcon>
      </ImageContainer>
      <Author>{name}</Author>
      <Job>{job}</Job>
      <Info>{text}</Info>
      <ButtonContainer>
        <ReviewButton onClick={previousPerson}>
          <FaChevronLeft />
        </ReviewButton>
        <ReviewButton onClick={nextPerson}>
          <FaChevronRight />
        </ReviewButton>
      </ButtonContainer>
      <RandomButton>surprise me</RandomButton>
    </Article>
  );
};

export default Review;
