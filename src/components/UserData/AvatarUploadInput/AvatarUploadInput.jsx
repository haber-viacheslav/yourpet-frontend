import { useState } from 'react';
// import { useFormikContext } from 'formik';
import { UserPhotoIcon } from '../Icons/Icons';
import { EditPhotoBtn, ConfirmPhotoBtn } from '../buttons/buttons';
import {
  PhotoWrapper,
  UploadFileLabel,
  UploadFile,
  // Photo,
  // ErrWrapper,
  PhotoPlaceWrapper,
} from './AvatarUploadInput.styled';
// import { theme } from "theme/theme";
import PropTypes from 'prop-types';

export const AvatarUploadInput = (
  // { errors, touched }
  ) => {
    // const [toggleEditPhotoBtn, setToggleEditPhotoBtn] = useState();
  // const [photoPreview, SetPhotoPreview] = useState(null);
  // const { setFieldValue } = useFormikContext();

  // const handleUploadFile = e => {
  //   const uploadFile = e.currentTarget.files[0];
  //   setFieldValue('file', uploadFile);
  //   const preview = uploadFile ? URL.createObjectURL(uploadFile) : null;
  //   SetPhotoPreview(preview);
  // };

  // const isFieldInvalid = errors.file && touched.file;

  return (
    <UploadFileLabel>


{/* BUTTONS!!! toggle! */}

      <EditPhotoBtn/>
      <ConfirmPhotoBtn/>

      <UploadFile
        type="file"
        name="file"
        accept="image/*"
        id="file"
        // onChange={handleUploadFile}
      />
      <PhotoPlaceWrapper>
        <PhotoWrapper>
          {/* {photoPreview && <Photo src={photoPreview} />}
          {!photoPreview && <PlusIcon/>} */}
          <UserPhotoIcon/>
        </PhotoWrapper>
        {/* {isFieldInvalid && <ErrWrapper>{errors.file}</ErrWrapper>} */}
      </PhotoPlaceWrapper>


    </UploadFileLabel>
  );
};

AvatarUploadInput.propTypes = {
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};
