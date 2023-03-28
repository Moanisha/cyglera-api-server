const cron = require("node-cron");
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "database-1.ccidmo0m1v19.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "password",
  port: "5432",
});
const resetAvailableSlots = async () => {
  const client = await pool.connect();

  try {
    const availableSlots = [
      "9:00AM - 10:00AM",
      "10:00AM - 11:00AM",
      "11:00AM - 12:00PM",
      "12:00PM - 1:00PM",
      "2:00PM - 3:00PM",
      "3:00PM - 4:00PM",
      "4:00PM - 5:00PM",
      "5:00PM - 6:00PM",
    ];
    // Convert the availableSlots array into a comma-separated string for the SQL query
    const slotsString = JSON.stringify(availableSlots);

    // Update the available_slots column for all rows in the dietician table
    await client.query(
      ` UPDATE "public"."Dieticians" SET "availableSlots" = '${slotsString}';
      
        UPDATE "public"."Physicians" SET "availableSlots" = '${slotsString}';

        UPDATE "public"."Trainers" SET "availableSlots" = '${slotsString}';

        UPDATE "public"."CareProviders" SET "availableSlots" = '${slotsString}'; `
    );

    console.log("Available slots reset successfully.");
  } catch (err) {
    console.error("Error resetting available slots:", err);
  } finally {
    client.release();
  }
};
module.exports = {
  start: () => {
    cron.schedule("0 0 * * *", resetAvailableSlots);
  },
};
