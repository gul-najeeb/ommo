export const baseUrl = process.env.REACT_APP_API_URL || "http://116.203.191.120:5000"; // soon will come through .env
export const notFoundImage = `https://cdni.iconscout.com/illustration/premium/thumb/404-error-page-illustration-download-in-svg-png-gif-file-formats--bug-landing-pack-design-development-illustrations-2451625.png?f=webp`
// http://116.203.191.120:5000/
const units = [
  {
    unit_id: 1,
    status: "Active",
    created_at: "2023-10-01T10:00:00Z",
    driver: {
      driver_id: 1,
      driver_name: "Driver 1",
      license_number: "D001",
      license_state: "CA",
      email: "driver1@example.com",
      phone_number: "123-456-7890",
      current_mode: "Driving",
      rating: 4.5,
    },
    truck: {
      truck_id: 1,
      vin_number: "VIN001",
      brand: "Ford",
      model: "F-150",
      year: 2020,
      license_plate_state: "CA",
      fuel_type: "Diesel",
      color: "Red",
      rating: 4.5,
      truck_landmark: "Landmark 1",
    },
    trailer: {
      trailer_id: 1,
      vin_code: "TRAILER001",
      plate_number: "PLATE001",
      car_brand: "Brand1",
      rating: 4.5,
      truck_landmark: "Landmark1",
    },
  },
  {
    unit_id: 2,
    status: "Active",
    created_at: "2023-10-02T10:30:00Z",
    driver: {
      driver_id: 2,
      driver_name: "Driver 2",
      license_number: "D002",
      license_state: "NY",
      email: "driver2@example.com",
      phone_number: "123-456-7891",
      current_mode: "OFF",
      rating: 4.2,
    },
    truck: {
      truck_id: 2,
      vin_number: "VIN002",
      brand: "Chevrolet",
      model: "Silverado",
      year: 2021,
      license_plate_state: "NY",
      fuel_type: "Diesel",
      color: "Blue",
      rating: 4.2,
      truck_landmark: "Landmark 2",
    },
    trailer: {
      trailer_id: 2,
      vin_code: "TRAILER002",
      plate_number: "PLATE002",
      car_brand: "Brand2",
      rating: 4.2,
      truck_landmark: "Landmark2",
    },
  },
  {
    unit_id: 3,
    status: "Active",
    created_at: "2023-10-03T11:00:00Z",
    driver: {
      driver_id: 3,
      driver_name: "Driver 3",
      license_number: "D003",
      license_state: "TX",
      email: "driver3@example.com",
      phone_number: "123-456-7892",
      current_mode: "ON",
      rating: 4.0,
    },
    truck: {
      truck_id: 3,
      vin_number: "VIN003",
      brand: "Dodge",
      model: "Ram 1500",
      year: 2019,
      license_plate_state: "TX",
      fuel_type: "Gasoline",
      color: "Black",
      rating: 4.0,
      truck_landmark: "Landmark 3",
    },
    trailer: {
      trailer_id: 3,
      vin_code: "TRAILER003",
      plate_number: "PLATE003",
      car_brand: "Brand3",
      rating: 4.0,
      truck_landmark: "Landmark3",
    },
  },
  {
    unit_id: 4,
    status: "Active",
    created_at: "2023-10-04T11:30:00Z",
    driver: {
      driver_id: 4,
      driver_name: "Driver 4",
      license_number: "D004",
      license_state: "FL",
      email: "driver4@example.com",
      phone_number: "123-456-7893",
      current_mode: "Driving",
      rating: 4.6,
    },
    truck: {
      truck_id: 4,
      vin_number: "VIN004",
      brand: "Toyota",
      model: "Tundra",
      year: 2018,
      license_plate_state: "FL",
      fuel_type: "Gasoline",
      color: "White",
      rating: 4.6,
      truck_landmark: "Landmark 4",
    },
    trailer: {
      trailer_id: 4,
      vin_code: "TRAILER004",
      plate_number: "PLATE004",
      car_brand: "Brand4",
      rating: 4.6,
      truck_landmark: "Landmark4",
    },
  },
  {
    unit_id: 5,
    status: "Active",
    created_at: "2023-10-05T12:00:00Z",
    driver: {
      driver_id: 5,
      driver_name: "Driver 5",
      license_number: "D005",
      license_state: "IL",
      email: "driver5@example.com",
      phone_number: "123-456-7894",
      current_mode: "OFF",
      rating: 3.9,
    },
    truck: {
      truck_id: 5,
      vin_number: "VIN005",
      brand: "Nissan",
      model: "Titan",
      year: 2022,
      license_plate_state: "IL",
      fuel_type: "Diesel",
      color: "Gray",
      rating: 3.9,
      truck_landmark: "Landmark 5",
    },
    trailer: {
      trailer_id: 5,
      vin_code: "TRAILER005",
      plate_number: "PLATE005",
      car_brand: "Brand5",
      rating: 3.9,
      truck_landmark: "Landmark5",
    },
  },
  {
    unit_id: 6,
    status: "Active",
    created_at: "2023-10-06T12:30:00Z",
    driver: {
      driver_id: 6,
      driver_name: "Driver 6",
      license_number: "D006",
      license_state: "CA",
      email: "driver6@example.com",
      phone_number: "123-456-7895",
      current_mode: "ON",
      rating: 4.4,
    },
    truck: {
      truck_id: 6,
      vin_number: "VIN006",
      brand: "Ford",
      model: "F-250",
      year: 2021,
      license_plate_state: "CA",
      fuel_type: "Gasoline",
      color: "Red",
      rating: 4.4,
      truck_landmark: "Landmark 6",
    },
    trailer: {
      trailer_id: 6,
      vin_code: "TRAILER006",
      plate_number: "PLATE006",
      car_brand: "Brand6",
      rating: 4.4,
      truck_landmark: "Landmark6",
    },
  },
  {
    unit_id: 7,
    status: "Active",
    created_at: "2023-10-07T13:00:00Z",
    driver: {
      driver_id: 7,
      driver_name: "Driver 7",
      license_number: "D007",
      license_state: "NY",
      email: "driver7@example.com",
      phone_number: "123-456-7896",
      current_mode: "Driving",
      rating: 4.1,
    },
    truck: {
      truck_id: 7,
      vin_number: "VIN007",
      brand: "Chevrolet",
      model: "Colorado",
      year: 2020,
      license_plate_state: "NY",
      fuel_type: "Diesel",
      color: "Blue",
      rating: 4.1,
      truck_landmark: "Landmark 7",
    },
    trailer: {
      trailer_id: 7,
      vin_code: "TRAILER007",
      plate_number: "PLATE007",
      car_brand: "Brand7",
      rating: 4.1,
      truck_landmark: "Landmark7",
    },
  },
  {
    unit_id: 8,
    status: "Active",
    created_at: "2023-10-08T13:30:00Z",
    driver: {
      driver_id: 8,
      driver_name: "Driver 8",
      license_number: "D008",
      license_state: "TX",
      email: "driver8@example.com",
      phone_number: "123-456-7897",
      current_mode: "OFF",
      rating: 4.3,
    },
    truck: {
      truck_id: 8,
      vin_number: "VIN008",
      brand: "Dodge",
      model: "Ram 2500",
      year: 2021,
      license_plate_state: "TX",
      fuel_type: "Diesel",
      color: "Black",
      rating: 4.3,
      truck_landmark: "Landmark 8",
    },
    trailer: {
      trailer_id: 8,
      vin_code: "TRAILER008",
      plate_number: "PLATE008",
      car_brand: "Brand8",
      rating: 4.3,
      truck_landmark: "Landmark8",
    },
  },
  {
    unit_id: 9,
    status: "Active",
    created_at: "2023-10-09T14:00:00Z",
    driver: {
      driver_id: 9,
      driver_name: "Driver 9",
      license_number: "D009",
      license_state: "FL",
      email: "driver9@example.com",
      phone_number: "123-456-7898",
      current_mode: "ON",
      rating: 3.8,
    },
    truck: {
      truck_id: 9,
      vin_number: "VIN009",
      brand: "Toyota",
      model: "Tacoma",
      year: 2019,
      license_plate_state: "FL",
      fuel_type: "Gasoline",
      color: "White",
      rating: 3.8,
      truck_landmark: "Landmark 9",
    },
    trailer: {
      trailer_id: 9,
      vin_code: "TRAILER009",
      plate_number: "PLATE009",
      car_brand: "Brand9",
      rating: 3.8,
      truck_landmark: "Landmark9",
    },
  },
  {
    unit_id: 10,
    status: "Active",
    created_at: "2023-10-10T14:30:00Z",
    driver: {
      driver_id: 10,
      driver_name: "Driver 10",
      license_number: "D010",
      license_state: "IL",
      email: "driver10@example.com",
      phone_number: "123-456-7899",
      current_mode: "Driving",
      rating: 4.7,
    },
    truck: {
      truck_id: 10,
      vin_number: "VIN010",
      brand: "Nissan",
      model: "Frontier",
      year: 2022,
      license_plate_state: "IL",
      fuel_type: "Diesel",
      color: "Gray",
      rating: 4.7,
      truck_landmark: "Landmark 10",
    },
    trailer: {
      trailer_id: 10,
      vin_code: "TRAILER010",
      plate_number: "PLATE010",
      car_brand: "Brand10",
      rating: 4.7,
      truck_landmark: "Landmark10",
    },
  },
];

export const ENDCODED_USER = '__u'
export const OTP_ID = '__otp'
