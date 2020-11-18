import styled from 'styled-components';

export const Article = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-align: center;

  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;

export const QuoteIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translateY(25%);
  background: var(--clr-primary-5);
  color: var(--clr-white);
`;

export const Author = styled.h4`
  margin-bottom: 0.25rem;
`;

export const Job = styled.p`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: var(--clr-primary-5);
  font-size: 0.85rem;
`;

export const Info = styled.p`
  margin-bottom: 0.75rem;
`;

export const ButtonContainer = styled.div``;

export const ReviewButton = styled.button`
  color: var(--clr-primary-7);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--clr-primary-5);
  }
`;

export const RandomButton = styled.button`
  margin-top: 0.5rem;
  background: var(--clr-primary-10);
  color: var(--clr-primary-5);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: var(--radius);
  transition: var(--transition);
  border-color: transparent;
  cursor: pointer;

  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }
`;
