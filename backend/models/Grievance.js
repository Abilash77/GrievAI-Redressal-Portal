
import mongoose from 'mongoose';

const GrievanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in_progress', 'resolved'], default: 'pending' },
  response: { type: String },
}, { timestamps: true });

const Grievance = mongoose.model('Grievance', GrievanceSchema);
export default Grievance;
