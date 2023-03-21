import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IfetchCarts } from "./types";

export const fetchCarts = createAsyncThunk(
    'cart/fetchCartsStatus',
    async ( offset: number) => {
      let { data } = await axios.get<IfetchCarts>(`https://footballista.ru/api/seasons/5099/calendar_paginated?limit=10&offset=${offset}`);
      return data as IfetchCarts;
    },
);