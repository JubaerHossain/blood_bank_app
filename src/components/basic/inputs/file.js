import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import BrandPrimaryButton from '../buttons/brand-primary-button';
import ButtonTextWhite from '../texts/button-text-white';

const File = ({input: {value, onChange, onBlur}}) => {
  const openPicker = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      cropperCircleOverlay: true,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    }).then(img => {
      onChange({
        uri: img.path,
        width: img.width,
        height: img.height,
        mime: img.mime,
      });
    });
  };

  return (
    <BrandPrimaryButton>
      <ButtonTextWhite onPress={() => openPicker()}>
        Upload Bannner
      </ButtonTextWhite>
    </BrandPrimaryButton>
  );
};

export default File;
