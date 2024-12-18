import { axiosInstance } from "..";
export const fetchCompany = async () => {
    try {
        const response = await axiosInstance.get('/api/company/get-company-profile', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data; // Return the data received from the API
    } catch (error) {
        console.error('Error fetching company profile data:', error);
        return null; // Return null in case of an error
    }
};


// Function to update company profile data using Axios PATCH request
export const updateCompanyProfile = async (updatedData) => {
    try {
      const response = await axiosInstance.patch('/api/company/update-company-profile', updatedData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`

        }
      });
      return response.data;  
    } catch (error) {
    //   console.error('Error updating company profile data:', error);
      return error;  
    }
  };
  
  // Reques