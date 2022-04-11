import s from './results-table.module.scss'
import PageLayout from "../../../pageLayout/PageLayout";
import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import Input from "../../../input/input";
import AppIconSearch from "../../../app-icons/app-icon-search";
import {useRouter} from "next/router";
import Link from 'next/link'
import {getResult, resetList, selectColumns, selectMedal, selectResults} from "../../../../store/slice/medalSlice";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import Button from "../../../button/button";

type EResultsTablePropTypes = {
    id?: string
}

const ResultsTable: React.FC<EResultsTablePropTypes> = ({id}) => {
    const [initialState, setInitialState] = useState({
        medal_id: 0,
        page: 0,
        max: 8
    },)
    const columns = useAppSelector(selectColumns);
    const dispatch = useAppDispatch()
    const {
        list,
        total,
        error,
        pending
    } = useAppSelector(selectResults)
    useEffect(() => {
        return () => {
            dispatch(resetList())
        }
    },[])

    useEffect(() => {
        id && dispatch(getResult({...initialState, medal_id: +id}))
    }, [id, initialState])

    const increaseValue = () => {
        setInitialState(state => {
            return {
                ...state, page: state.page += 1
            }
        })
    }

    const renderButton = useCallback(() => {
        if (list.length >= total) {
            return ''
        }
        return (
            <Button size='normal' type='outline-primary' onClick={increaseValue}>See more</Button>
        )
    }, [list])


    const editable = (): any => {
        return [...columns, {
            title: '',
            key: 'id',
            dataIndex: 'id',
            width: 70,
            fixed: 'right',
            render: (id: string) => (
                <Link href={`/protocol/${[id]}`}>
                    <a>
                        <span className={s.resultsTableMore}>More</span>
                    </a>
                </Link>
            ),
        }]
    }
    const condition = () => {
        return columns && list.length > 0
    }


    const emptyStateGuard = () => {
        if (!list.length) {
            return (
                <div className={s.resultsTableEmptyState}>
                    Where is no data 🥸
                </div>
            )
        }
        return condition() && <Table
            className="table-striped-rows"
            rowClassName={(record, index) => index % 2 === 0 ? s.tableRowLight : s.tableRowDark}
            dataSource={list}
            rowKey={(record => record.athlete_id)}
            scroll={{x: 768}}
            bordered
            columns={editable()}
            pagination={false}/>
    }

    const onChangeHandler = (value: string) => {

    }


    return (
        <div className={s.resultsTable}>
            <h2 className={s.resultsTableTitle}>Results</h2>

            <PageLayout>
                <>
                    <Input onChange={onChangeHandler}
                           extraStyles={s.resultsSearchInput}
                           value={''}
                           icon={<AppIconSearch/>}
                           placeHolder={'Search via name or start number'}
                           width='full'/>
                    {emptyStateGuard()}
                    <div className={s.resultsTableWrapper}>
                        {renderButton()}
                    </div>
                </>
            </PageLayout>
        </div>
    )
}

export default ResultsTable;
