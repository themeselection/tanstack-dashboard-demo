import { type Item } from '@/components/shadcn-studio/blocks/datatable-transaction'
import { createFileRoute } from '@tanstack/react-router'

import { Card } from '@/components/ui/card'

import SalesMetricsCard from '@/components/shadcn-studio/blocks/chart-sales-metrics'
import TransactionDatatable from '@/components/shadcn-studio/blocks/datatable-transaction'
import StatisticsCard from '@/components/shadcn-studio/blocks/statistics-card-01'
import ProductInsightsCard from '@/components/shadcn-studio/blocks/widget-product-insights'
import TotalEarningCard from '@/components/shadcn-studio/blocks/widget-total-earning'

import {
    CalendarX2Icon,
    TriangleAlertIcon,
    TruckIcon
} from 'lucide-react'

// Statistics card data
const StatisticsCardData = [
    {
        icon: <TruckIcon className='h-4 w-4' />,
        value: '42',
        title: 'Shipped Orders',
        changePercentage: '+18.2%'
    },
    {
        icon: <TriangleAlertIcon className='h-4 w-4' />,
        value: '8',
        title: 'Damaged Returns',
        changePercentage: '-8.7%'
    },
    {
        icon: <CalendarX2Icon className='h-4 w-4' />,
        value: '27',
        title: 'Missed Delivery Slots',
        changePercentage: '+4.3%'
    }
]

// Earning data for Total Earning card
const earningData = [
    {
        img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/zipcar.png',
        platform: 'Zipcar',
        technologies: 'Vuejs & HTML',
        earnings: '-$23,569.26',
        progressPercentage: 75
    },
    {
        img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/bitbank.png',
        platform: 'Bitbank',
        technologies: 'Figma & React',
        earnings: '-$12,650.31',
        progressPercentage: 25
    }
]

// Transaction table data
const transactionData: Item[] = [
    {
        id: '1',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
        avatarFallback: 'JA',
        name: 'Jack Alfredo',
        amount: 315.0,
        status: 'paid',
        email: 'jack@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '2',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
        avatarFallback: 'MG',
        name: 'Maria Gonzalez',
        amount: 253.4,
        status: 'pending',
        email: 'maria.g@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '3',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
        avatarFallback: 'JD',
        name: 'John Doe',
        amount: 852.0,
        status: 'paid',
        email: 'john.doe@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '4',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
        avatarFallback: 'EC',
        name: 'Emily Carter',
        amount: 889.0,
        status: 'pending',
        email: 'emily.carter@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '5',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
        avatarFallback: 'DL',
        name: 'David Lee',
        amount: 723.16,
        status: 'paid',
        email: 'david.lee@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '6',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
        avatarFallback: 'SP',
        name: 'Sophia Patel',
        amount: 612.0,
        status: 'failed',
        email: 'sophia.patel@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '7',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
        avatarFallback: 'RW',
        name: 'Robert Wilson',
        amount: 445.25,
        status: 'paid',
        email: 'robert.wilson@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '8',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
        avatarFallback: 'LM',
        name: 'Lisa Martinez',
        amount: 297.8,
        status: 'processing',
        email: 'lisa.martinez@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '9',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
        avatarFallback: 'MT',
        name: 'Michael Thompson',
        amount: 756.9,
        status: 'paid',
        email: 'michael.thompson@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '10',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
        avatarFallback: 'AJ',
        name: 'Amanda Johnson',
        amount: 189.5,
        status: 'pending',
        email: 'amanda.johnson@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '11',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png',
        avatarFallback: 'KB',
        name: 'Kevin Brown',
        amount: 1024.75,
        status: 'paid',
        email: 'kevin.brown@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '12',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
        avatarFallback: 'SD',
        name: 'Sarah Davis',
        amount: 367.2,
        status: 'failed',
        email: 'sarah.davis@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '13',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png',
        avatarFallback: 'CG',
        name: 'Christopher Garcia',
        amount: 598.45,
        status: 'processing',
        email: 'christopher.garcia@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '14',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png',
        avatarFallback: 'JR',
        name: 'Jennifer Rodriguez',
        amount: 821.3,
        status: 'paid',
        email: 'jennifer.rodriguez@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '15',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png',
        avatarFallback: 'DM',
        name: 'Daniel Miller',
        amount: 156.75,
        status: 'pending',
        email: 'daniel.miller@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '16',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
        avatarFallback: 'NW',
        name: 'Nicole White',
        amount: 934.1,
        status: 'paid',
        email: 'nicole.white@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '17',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png',
        avatarFallback: 'AL',
        name: 'Anthony Lopez',
        amount: 412.85,
        status: 'failed',
        email: 'anthony.lopez@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '18',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-18.png',
        avatarFallback: 'MH',
        name: 'Michelle Harris',
        amount: 675.5,
        status: 'processing',
        email: 'michelle.harris@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '19',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png',
        avatarFallback: 'JC',
        name: 'James Clark',
        amount: 289.95,
        status: 'paid',
        email: 'james.clark@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '20',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-20.png',
        avatarFallback: 'RL',
        name: 'Rachel Lewis',
        amount: 1156.25,
        status: 'pending',
        email: 'rachel.lewis@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '21',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-21.png',
        avatarFallback: 'TY',
        name: 'Thomas Young',
        amount: 543.6,
        status: 'paid',
        email: 'thomas.young@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '22',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-22.png',
        avatarFallback: 'SB',
        name: 'Stephanie Brown',
        amount: 789.3,
        status: 'processing',
        email: 'stephanie.brown@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '23',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-23.png',
        avatarFallback: 'BM',
        name: 'Brandon Moore',
        amount: 425.75,
        status: 'failed',
        email: 'brandon.moore@shadcnstudio.com',
        paidBy: 'visa'
    },
    {
        id: '24',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-24.png',
        avatarFallback: 'KT',
        name: 'Kelly Taylor',
        amount: 1203.5,
        status: 'paid',
        email: 'kelly.taylor@shadcnstudio.com',
        paidBy: 'mastercard'
    },
    {
        id: '25',
        avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-25.png',
        avatarFallback: 'MA',
        name: 'Mark Anderson',
        amount: 356.2,
        status: 'pending',
        email: 'mark.anderson@shadcnstudio.com',
        paidBy: 'visa'
    }
]

export const Route = createFileRoute('/dashboard/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
            {/* Statistics Cards */}
            <div className='col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1'>
                {StatisticsCardData.map((card, index) => (
                    <StatisticsCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        value={card.value}
                        changePercentage={card.changePercentage}
                    />
                ))}
            </div>

            <div className='grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2'>
                {/* Product Insights Card */}
                <ProductInsightsCard className='justify-between gap-3 *:data-[slot=card-content]:space-y-5' />

                {/* Total Earning Card */}
                <TotalEarningCard
                    title='Total Earning'
                    earning={24650}
                    trend='up'
                    percentage={10}
                    comparisonText='Compare to last year ($84,325)'
                    earningData={earningData}
                    className='justify-between gap-5 sm:min-w-0 *:data-[slot=card-content]:space-y-7'
                />
            </div>

            <SalesMetricsCard className='col-span-full xl:col-span-2 *:data-[slot=card-content]:space-y-6' />
            <Card className='col-span-full w-full py-0'>
                <TransactionDatatable data={transactionData} />
            </Card>
        </div>
    )
}
