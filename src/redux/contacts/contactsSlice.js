import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './contactService';
import { getActions } from 'components/helpers/getActions';
import { contactsExtraActions } from 'components/helpers/constants/actionConstants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        toast.success('Success', {
          duration: 1000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success('Success 🖋', {
          duration: 1000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast.success('Success 🙄', {
          duration: 1000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .addCase(
        changeContact.fulfilled,
        (state, action) => {
          state.splice(
            state.findIndex(contact => contact.id === action.payload.id),
            1,
            action.payload
          );
        },
        toast.success('Success 👌', {
          duration: 1000,
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      )
      .addMatcher(
        isAnyOf(...getActions(contactsExtraActions, 'pending')),
        state => {
          state.isLoading = true;
          toast.loading('Loading...☕', {
            duration: 1000,
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
      )
      .addMatcher(
        isAnyOf(...getActions(contactsExtraActions, 'rejected')),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          toast.error('Error! 😲 Try again later..', {
            duration: 2000,
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
        }
      )
      .addMatcher(
        isAnyOf(...getActions(contactsExtraActions, 'fulfilled')),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
