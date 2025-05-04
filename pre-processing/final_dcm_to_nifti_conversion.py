import os
import dicom2nifti
import shutil

# Root directory where your dataset is stored
root_dir = r"D:\ADNI\ADNI"

# Destination folder for storing NIfTI files
output_dir = r"C:\Users\shach\OneDrive\Documents\SEM_6\Capstone\preprocessing\nifti_output_2"

# Ensure the output directory exists
os.makedirs(output_dir, exist_ok=True)

# Traverse subjectID folders
for subject_folder in os.listdir(root_dir):
    subject_path = os.path.join(root_dir, subject_folder)
    if os.path.isdir(subject_path):
        mprage_path = os.path.join(subject_path, "MPRAGE")
        
        if os.path.exists(mprage_path):
            for date_folder in os.listdir(mprage_path):
                date_path = os.path.join(mprage_path, date_folder)
                
                if os.path.isdir(date_path):
                    for image_folder in os.listdir(date_path):
                        image_path = os.path.join(date_path, image_folder)
                        
                        if os.path.isdir(image_path):
                            # Extract Image ID (Assumes image_folder contains the correct image ID)
                            image_id = image_folder  

                            try:
                                # Convert DICOM to NIfTI
                                dicom2nifti.convert_directory(image_path, output_dir, compression=True)

                                # Identify the newly generated NIfTI file
                                for filename in os.listdir(output_dir):
                                    if filename.endswith(".nii.gz"):
                                        old_path = os.path.join(output_dir, filename)
                                        new_path = os.path.join(output_dir, f"{image_id}.nii.gz")
                                        
                                        # Rename to match image_id
                                        shutil.move(old_path, new_path)
                                        print(f"Converted {image_id} to NIfTI and saved as {new_path}")
                                        break  # Stop after renaming the first found file

                            except Exception as e:
                                print(f"Error converting {image_id}: {e}")