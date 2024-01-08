import { Schema, model, Types } from "mongoose";

const interviewSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assessment: {
    type: String,
    required: true
  },
  interview: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

export const Interview = model('Interview', interviewSchema); 
