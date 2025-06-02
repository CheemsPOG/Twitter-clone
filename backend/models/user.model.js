import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
   fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: [],
  }],
  following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
  profileImg: {
    type: String,
    default: '', // Default profile image URL
  },
  coverImg: {
    type: String,
    default: '', // Default cover image URL
  },
  bio: {
        type: String,
        default: '', // Default bio
    },
    link: {
        type: String,
        default: '', // Default link
    },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

export default User;