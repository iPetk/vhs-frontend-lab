import React from "react";

export type VHS = {
  id?: number;
  title: string;
  description: string;
  genre: string;
  duration: number;
  releasedAt: number;
  rentalPrice: number;
  rentalDuration: number;
  quantity?: number;
  thumbnail?: string;
};
export type validationFields = {
  titleValid: boolean;
  descriptionValid: boolean;
  genreValid: boolean;
  durationValid: boolean;
  releasedAtValid: boolean;
  rentalPriceValid: boolean;
  rentalDurationValid: boolean;
};
