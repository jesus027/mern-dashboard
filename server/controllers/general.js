import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";
import User from "../models/User.js";


export const getUser = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        
        res.status(200).json(user);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getDashboardStats = async (req, res) => {
    try {
        const currentMonth = "November";
        const currentYear = 2021;
        const currentDay = "2021-11-15";

        /* Transacciones Recientes */
        const transactions = await Transaction.find().limit(50).sort({createdOn: -1});

        /* Estadísticas generales */
        const overallStat = await OverallStat.find({year: currentYear});

        const {
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            dailyData,
            salesByCategory
        } = overallStat[0];

        const thisMonthStats = overallStat[0].monthlyData.find(({month}) => {
            return month === currentMonth;
        });

        const todayStats = overallStat[0].dailyData.find(({date}) => {
            return date === currentDay;
        });

        res.status(200).json({
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            dailyData,
            salesByCategory,
            thisMonthStats,
            todayStats,
            transactions
        })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}