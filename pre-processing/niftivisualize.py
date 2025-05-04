import nibabel as nib
import numpy as np
import matplotlib.pyplot as plt

# Load the NIfTI file
nifti_file = r"C:\Users\shach\OneDrive\Documents\SEM_6\Capstone\preprocessing\nifti_output_2\I8298.nii.gz"
img = nib.load(nifti_file)

# Convert to NumPy array
data = img.get_fdata()

# Display a middle slice along each axis
fig, axes = plt.subplots(1, 3, figsize=(15, 5))

# Axial View (Z-axis)
axes[0].imshow(np.rot90(data[:, :, data.shape[2] // 2]), cmap="gray")
axes[0].set_title("Axial View")

# Coronal View (Y-axis)
axes[1].imshow(np.rot90(data[:, data.shape[1] // 2, :]), cmap="gray")
axes[1].set_title("Coronal View")

# Sagittal View (X-axis)
axes[2].imshow(np.rot90(data[data.shape[0] // 2, :, :]), cmap="gray")
axes[2].set_title("Sagittal View")

plt.show()
