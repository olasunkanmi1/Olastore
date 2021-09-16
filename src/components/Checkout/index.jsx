import React from 'react'
import { useState, useEffect, useRef } from "react";
import {
    Step,
    Paper,
  Stepper,
  StepLabel,
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { commerce } from "../../lib/Commerce";

import './styles.css'

const index = () => {
    return (
        <div className='checkout'>
            checkout
        </div>
    )
}

export default index
