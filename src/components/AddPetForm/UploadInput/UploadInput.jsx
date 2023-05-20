import { useState } from 'react';
import { ErrorMessage, useFormikContext } from 'formik';
import { PlusIcon } from '../Icon/Icon';
import {
  PhotoWrapper,
  UploadFileLabel,
  UploadFile,
  Photo,
  ErrWrapper,
} from './UploadInput.styled';

export const UploadInput = () => {
  const [photoPreview, SetPhotoPreview] = useState(null);
  const { setFieldValue } = useFormikContext();

  const handleUploadFile = e => {
    const uploadFile = e.currentTarget.files[0];
    setFieldValue('file', uploadFile);
    const preview = uploadFile ? URL.createObjectURL(uploadFile) : null;
    SetPhotoPreview(preview);
  };

  return (
    <UploadFileLabel htmlFor="file">
      Add photo
      <UploadFile
        type="file"
        name="file"
        accept="image/*"
        id="file"
        onChange={handleUploadFile}
      />
      <PhotoWrapper>
        {photoPreview && <Photo src={photoPreview} />}
        {!photoPreview && <PlusIcon iconName="#icon-plus" />}
        <ErrWrapper>
          <ErrorMessage name="file" />
        </ErrWrapper>
      </PhotoWrapper>
    </UploadFileLabel>
  );
};
