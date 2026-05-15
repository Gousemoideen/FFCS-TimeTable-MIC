'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { fullCourseData } from '@/lib/type';

type PreferencesContextType = {
    selectedScheme: string | null;
    selectedCourses: fullCourseData[];
    setSelectedScheme: (scheme: string) => void;
    addCourse: (course: fullCourseData) => void;
    updateCourse: (courseCode: string, updatedCourse: fullCourseData) => void;
    removeCourse: (courseCode: string) => void;
    clearCourses: () => void;
};

const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined);

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
    const [selectedScheme, setSelectedScheme] = useState<string | null>(null);
    const [selectedCourses, setSelectedCourses] = useState<fullCourseData[]>([]);

    const addCourse = useCallback((course: fullCourseData) => {
        setSelectedCourses(prev => {
            const exists = prev.some(c => c.courseCode === course.courseCode);
            if (exists) return prev;
            return [...prev, course];
        });
    }, []);

    const updateCourse = useCallback((courseCode: string, updatedCourse: fullCourseData) => {
        setSelectedCourses(prev =>
            prev.map(c => c.courseCode === courseCode ? updatedCourse : c)
        );
    }, []);

    const removeCourse = useCallback((courseCode: string) => {
        setSelectedCourses(prev => prev.filter(c => c.courseCode !== courseCode));
    }, []);

    const clearCourses = useCallback(() => {
        setSelectedCourses([]);
    }, []);

    return (
        <PreferencesContext.Provider
            value={{
                selectedScheme,
                selectedCourses,
                setSelectedScheme,
                addCourse,
                updateCourse,
                removeCourse,
                clearCourses,
            }}
        >
            {children}
        </PreferencesContext.Provider>
    );
};

export const usePreferences = () => {
    const context = useContext(PreferencesContext);
    if (!context) {
        throw new Error('usePreferences must be used within a PreferencesProvider');
    }
    return context;
};
